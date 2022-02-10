import { ref } from 'vue';
const useApi = ({ url, fireOnLoad, successCallback = () => { }, failedCallback = () => { } }) => {
    const pending = ref(true);
    const hasError = ref(false);
    const data = ref([]);
    const request = async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw Error("No data available.");
            }
            data.value = await res.json();
            successCallback(data);
            pending.value = false;
        } catch (error) {
            failedCallback();
            hasError.value = true;
            pending.value = false;
        }
    };

    if (!fireOnLoad) request();

    return { pending, hasError, data, request, fireOnLoad };
}

export default useApi;
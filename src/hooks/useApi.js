import { onMounted, ref } from 'vue';
const useApi = ({ url, fireOnLoad = false, successCallback = () => { }, failedCallback = () => { } }) => {
    const pending = ref(false);
    const hasError = ref(false);
    const data = ref([]);
    const request = async () => {
        pending.value = true;
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

    onMounted(() => {
        if (fireOnLoad) request()
    })

    return { pending, hasError, data, request };
}

export default useApi;
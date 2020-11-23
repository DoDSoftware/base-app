<template>
    <Button icon="pi pi-external-link" label="Open Dialog" @click="dialogVisible = !dialogVisible"></Button>
    <Dialog header="Header" v-model:visible="dialogVisible" >
        Content
    </Dialog>
</template>
<script>
import { ref } from "vue";
export default {
    setup () {
        const modalOpen = ref(false);
        const dialogVisible = ref(false);
        const toggleModalState = () => {
            modalOpen.value = !modalOpen.value;
        };
        return {
            modalOpen,
            toggleModalState,
            dialogVisible
        }
    },
    components: {

    }
};
</script>

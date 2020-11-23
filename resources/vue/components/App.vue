<template>
    <Button icon="pi pi-external-link" label="Open Dialog" @click="dialogVisible = !dialogVisible"></Button>
    <Dialog header="Header" v-model:visible="dialogVisible" >
        Content
    </Dialog>


    <TabView>
        <TabPanel>
            <template #header>
                <i class="pi pi-calendar"></i>
                <span>Header I</span>
            </template>
            Content I
        </TabPanel>
        <TabPanel>
            <template #header>
                <span>Header II</span>
                <i class="pi pi-user"></i>
            </template>
            Content II
        </TabPanel>
    </TabView>


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

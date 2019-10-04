import { debouce } from "./utils";

export const itemListenterMixin = {
    data() {
        return {
            itemImgListenter: null;
            newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debouce(this.$refs.scroll.refresh, 100)

        this.itemImgListenter = () => {
            this.newRefresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListenter)
        console.log("我是混入中的内容");
    }
}
<template>
    <div>
        Produto
    </div>
</template>

<script>
import CalculateDiscountMixin from '@/components/Products/CalculateDiscountMixin.vue';

export default{
    mixins:[CalculateDiscountMixin],
    created(){
        this.calculateDiscount();
    }
}
</script>
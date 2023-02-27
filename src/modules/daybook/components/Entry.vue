<template>
    <div class="entry-container mb-3 pointer p-2"
            @click="$router.push({name: 'entry', params: {id: 10}})">
        <!-- Título -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">26</span>
            <span class="mx-1 fs-5">Febrero</span>
            <span class="mx-2 fw-light">2022, Domingo</span>
        </div>

        <div class="entry-description">
            Tempor ullamco esse in duis proident commodo irure. Aliqua officia veniam aliqua dolore irure dolore elit. Aute nisi ea tempor cillum. Ex proident do minim voluptate. Ea Lorem proident dolore ut in voluptate cillum labore commodo. Consectetur qui deserunt nisi amet incididunt ut amet.
        </div>
    </div>
</template>



<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: .2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
    }
    
.entry-description{
    font-size: 12px;
}
}

</style>
<template>
    <ul class="catalog__pagination pagination">
      <li class="pagination__item">
        <a href="#" class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled': isInFirstPage}" aria-label="Предыдущая страница" @click.prevent="prevPage(isInFirstPage)" >
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber" >
        <a href="#" class="pagination__link" @click.prevent="paginate(pageNumber)" :class="{'pagination__link--current': pageNumber === page}">
          {{ pageNumber }}
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled': isInLastPage}" aria-label="Следующая страница" @click.prevent="nextPage(isInLastPage)">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
    model: {
        prop: 'page',
        event: 'paginate',
    },
    props: ['page', 'count', 'perPage'],
    computed: {
        pages() {
            return Math.ceil(this.count / this.perPage);
        },
        isInFirstPage() {
            return this.page === 1
        },
        isInLastPage() {
            return this.page === this.pages;
        },
    },
    methods: {
        paginate(page) {
            this.$emit('paginate', page);
        },
        prevPage(isInFirstPage) {
            if(!isInFirstPage) {
                this.$emit('paginate', this.page - 1);
            }
        },
        nextPage(isInLastPage) { 
            if(!isInLastPage) {
                this.$emit('paginate', this.page + 1);
            }
        },
    },
}
</script>
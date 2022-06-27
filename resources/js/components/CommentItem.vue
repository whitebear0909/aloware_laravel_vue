<template>
    <div :style="`margin-left: ${marginSize(comment.depth)}`" class="post-block__comments">
        <div  class="comment-view-box mb-3">
            <div class="d-flex mb-2">
                <img src="images/user1.jpg" alt="User img" class="author-img author-img--small mr-2">
                <div class="w-100">
                    <h6 class="mb-1"><a href="#" class="text-dark">{{ comment.author }}</a></h6>
                    <p class="mb-1">{{ comment.message }}</p>
                    <div v-if="comment.depth <= 1" class="d-flex justify-content-end">
                        <b-button @click="() => $emit('setReplyId', comment.comment_id)" v-b-modal.create_comment_modal class="mt-3" variant="outline-success"
                            >Reply
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    components: { },
    props: [ 'comment' ],
    data() {
        return {
        };
    },
    computed: {
    },
    mounted() {
    },
    methods: {
		marginSize(depth){
			return depth * 30 + 'px;';
		}
    },
};
</script>

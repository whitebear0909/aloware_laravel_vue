<template>
   <section class="main-content">
		<div class="container">
			<div v-if="!isLoading">
				<h1 class="text-center text-uppercase">Social Media Post</h1>
				<br>
				<br>
				<div class="row">
					<div class="col-sm-6 offset-sm-3">
						<div class="post-block">
							<div class="d-flex justify-content-between">
								<div class="d-flex mb-3">
									<div class="mr-2">
										<a href="#" class="text-dark"><img src="images/user1.jpg" alt="User" class="author-img"></a>
									</div>
									<div>
										<h5 class="mb-0"><a href="#" class="text-dark">Kiran Acharya</a></h5>
									</div>
								</div>
							</div>
							<div class="post-block__content mb-2">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laboriosam non atque, porro cupiditate commodi? Provident culpa vel sit enim!</p>
								<img src="images/food1.jpg" alt="Content img">
							</div>
							<hr>
							<comment-item 
								:key="index" 
								v-for="(comment, index) in comments.data" 
								:comment="comment" 
								@setReplyId="setReplyId">
							</comment-item>
						</div>
					</div>
				</div>
			</div>
			<div v-else class="text-center text-success my-2">
				<b-spinner class="align-middle"></b-spinner>
				<strong>Loading...</strong>
			</div>
		</div>
		<add-comment-modal :id="reply_id" @submitForm="saveComment"></add-comment-modal>
	</section>
</template>
<script>
import { mapGetters } from "vuex";
import AddCommentModal from "../../components/AddCommentModal";
import CommentItem from "../../components/CommentItem";

export default {
    components: { AddCommentModal, CommentItem },
    data() {
        return {
			reply_id: null
        };
    },
    computed: {
		...mapGetters({
            comments: "home/comments",
            isLoading: "home/isLoading",
        })
    },
    mounted() {
		this.$store.dispatch("home/getComments", "");
    },
    methods: {
		marginSize(depth){
			return depth * 30 + 'px;';
		},
		saveComment(formData){
			var _this = this;
			this.$store
                .dispatch("home/saveComment", formData)
                .then((res) => {
                    _this.$bvModal.hide("create_comment_modal");
					this.$store.dispatch("home/getComments", "");
                });
		},
		setReplyId(id){
			this.reply_id = id;
		}
    },
};
</script>

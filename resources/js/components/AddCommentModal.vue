<template>
    <b-modal id="create_comment_modal" title="Create Comment" hide-footer>
        <b-form @submit.stop.prevent="onSubmit">
            <div class="py-3">
                <div class="form-group">
                    <b-form-group label="COMMENT" label-for="message">
                        <b-form-input
                            size="lg"
                            class="form-control-alt"
                            id="message"
                            name="message"
                            placeholder="comment"
                            v-model="$v.form.message.$model"
                            :state="!$v.form.message.$error && null"
                            aria-describedby="message-feedback"
                        ></b-form-input>
                        <span v-if="$v.form.message.$error">
                            <small
                                v-if="!$v.form.message.required"
                                class="text-danger"
                                >Comment is required.</small
                            >
                            <small
                                v-if="!$v.form.message.minLength"
                                class="text-danger"
                                >Min length is 1.</small
                            >
                        </span>
                    </b-form-group>
                    <b-form-group
                        label="Author"
                        label-for="author"
                    >
                        <b-form-input
                            size="lg"
                            class="form-control-alt"
                            id="author"
                            name="author"
                            placeholder="author"
                            v-model="$v.form.author.$model"
                            :state="!$v.form.author.$error && null"
                            aria-describedby="author-feedback"
                        ></b-form-input>
                        <span v-if="$v.form.author.$error">
                            <small
                                v-if="!$v.form.author.required"
                                class="text-danger"
                                >Author is required.</small
                            >
                            <small
                                v-if="!$v.form.author.minLength"
                                class="text-danger"
                                >Min length is 3.</small
                            >
                        </span>
                    </b-form-group>
                </div>
                <div class="form-group row justify-content-end mb-0">
                    <b-col md="6" xl="5">
                        <b-button type="submit" variant="success" block>
                            <i class="fa fa-fw fa-plus mr-1"></i>
                            Create Comment
                        </b-button>
                    </b-col>
                </div>
            </div>
        </b-form>
    </b-modal>
</template>

<script>
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    props: ['id'],
    data() {
        return {
            form: {
                message: null,
                author: null,
            },
        };
    },
    validations: {
        form: {
            message: {
                required,
                minLength: minLength(1),
            },
            author: {
                required,
                minLength: minLength(3),
            },
        },
    },
    computed: {
    },
    mounted() {},
    methods: {
        onSubmit() {
            this.$v.form.$touch();

            if (this.$v.form.$anyError) {
                return;
            }
            
            this.form.parent_comment_id = this.id;
            this.$emit('submitForm', { data: this.form });
        },
    },
};
</script>

class PostsController < ApplicationController
    # t.string "title", null: false
    # t.string "url"
    # t.text "content"
    # t.integer "sub_id", null: false
    # t.integer "author_id"
    def new
        render :new
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            redirect_to sub_url(params[:sub_id])
        else
            redirect_to sub_url(params[:sub_id])
        end
    end
    
    def show
        @post = Post.find(params[:id])
        render :show
    end

    private
    def post_params
        params.require(:post).permit(:title,:url,:content)
    end
end

class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: :desc)
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: { post: @post }
    else
      flash[:notiice] = '文字を入力してください。'
      rend :index
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.destroy
      redirect_to root_path
    else
      render :index
    end
  end

  private

  def post_params
    params.require(:post).permit(:text)
  end
end

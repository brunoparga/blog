class BlogsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]
  before_action :set_blog, except: %i[index create]
  
  def index
    render json: Blog.order(updated_at: :desc)
  end

  def show
    render json: @blog
  end

  def create
    @blog = Blog.create(blog_params)
    render json: @blog
  end

  def update
    @blog.update(blog_params)
    render json: @blog
  end

  def destroy
    @blog.destroy
    render json: @blog
  end

  private

  def set_blog
    @blog = Blog.friendly.find(params[:id])
  end

  def blog_params
    params.permit(:title, :content)
  end
end

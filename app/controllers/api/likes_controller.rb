class Api::LikesController < ApplicationController

    def index
      @likes = Like.all.order('created_at ASC')
    end

    def create
      @like = Like.new(like_params)

      if @like.save
        render :show
      else
        render json: @like.errors.full_messages, status: 422
      end

    end

    def show
      @like = Like.find(params[:id])
    end

    def destroy
      @like = Like.find(params[:id])
      @like.destroy
      render :show
    end
    private

    def like_params
      params.require(:like).permit(:photo_id, :author_id)
    end

  end

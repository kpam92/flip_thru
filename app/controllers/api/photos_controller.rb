class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all.order('created_at ASC')
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end

  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render :show
  end
  private

  def photo_params
    params.require(:photo).permit(:image_url, :description, :author_id, :user_pic, :username)
  end

end

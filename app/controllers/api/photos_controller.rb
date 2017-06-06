class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
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

  private

  def photo_params
    params.require(:photo).permit(:image_url, :description, :author_id)
  end

end

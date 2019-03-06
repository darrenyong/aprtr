class Api::PhotosController < ApplicationController
  # Index
  def index 
    if params[:user_id]
      @photos = Photo.all.select{|photo| photo.uploader_id.to_s == params[:user_id]}
    else
      @photos = Photo.all
    end
    
    render :index
  end
  
  # Show
  def show
    @photo = Photo.find_by(id: params[:id])

    if @photo
      render :show
    else
      render json: ["Photo not found!"], status: 404
    end
  end
  
  # Create
  def create
    @photo = Photo.new(photo_params)
    @photo.uploader_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 500
    end
  end

  # Update
  def update
    @photo = current_user.photos.find(params[:id])

    if @photo.update(photo_params)
      render :show
    else
      render json: ["Photo not found!"], status: 404
    end
  end

  # Destroy
  def destroy
    @photo = current_user.photos.find(params[:id])

    if @photo
      @photo.destroy
    else
      render json: ["Photo not found"], status: 404
    end
  end
  
  # Photo Params
  private
  def photo_params
    params.require(:photo).permit(:title, :description, :picture)
  end

end
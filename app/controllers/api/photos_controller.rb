class PhotosController < ApplicationController
  # Index
  def index 
    @photos = Photo.all
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
      render: show
    else
      render json: ["Photo not found!"], status: 404
    end
  end

  # Destroy
  def destroy
    @photo = current_user.photos.find(params[:id])

    if @photo
      @photo.destroy
      render :index
    else
      render json ["Photo not found"], status: 404
    end
  end
  
  # Photo Params
  private
  def photo_params
    params.require(:photo).permit(
      :title,
      :description,
      :uploader_id
    )

end
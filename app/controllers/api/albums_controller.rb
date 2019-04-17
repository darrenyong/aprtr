class Api::AlbumsController < ApplicationController  
  def index
    if params[:user_id]
      @albums = Album.all.select{ |album| album.user_id.to_s == params[:user_id]}
      @user = User.find_by(id: params[:user_id])
      render :index
    else
      @albums = nil
    end
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 500
    end
  end

  def show
    @album = Album.find_by(id: params[:id])

    if @album
      @photos = @album.photos
      @user = User.find_by(id: @album.user_id)
      render :show
    else
      render json: ["Album not found!"], status: 404
    end
  end

  def update
    @album = current_user.albums.find(params[:id])

    if @album.update(album_params)
      render :show
    else
      render json: ["Album not found!"], status: 404
    end
  end

  def destroy
    @album = current_user.albums.find(params[:id])

    if @album
      @album.destroy
    else
      render json: ["Album not found"], status: 404
    end
  end

  private
  def album_params
    params.require(:album).permit(:title, :description)
  end
end

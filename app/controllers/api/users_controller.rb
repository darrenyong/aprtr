class Api::UsersController < ApplicationController

  # Create
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 500
    end

  end

  # Create
  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end

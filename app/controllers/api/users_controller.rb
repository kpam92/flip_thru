class Api::UsersController < ApplicationController

  def index
  	@users = User.all
  end

  def show
  	@user = User.find(params[:id])

  	if @user
  		render "api/users/show"
  	end
  end

  private

  def user_params
  	params.require(:user).permit(:username,:profile_pic)
  end

end

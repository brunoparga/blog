class SessionsController < Devise::SessionsController
  skip_before_action :authenticate_user!
  
  wrap_parameters :user
  
  def create
    super { |resource| @resource = resource }
  end
end

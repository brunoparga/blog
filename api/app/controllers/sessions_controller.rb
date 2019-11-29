class SessionsController < Devise::SessionsController
  wrap_parameters :user
  
  def create
    super { |resource| @resource = resource }
  end
end

class RegistrationsController < Devise::RegistrationsController
  def create
    build_resource(params.permit(:email, :password))
    sign_up(:user, resource)
    resource.save
    render_resource(resource)
  end
end

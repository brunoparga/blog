# rubocop:todo Style/Documentation
# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController
  skip_before_action :authenticate_user!

  def create
    build_resource(params.permit(:email, :password))
    sign_up(:user, resource)
    resource.save
    render_resource(resource)
  end
end
# rubocop:enable Style/Documentation

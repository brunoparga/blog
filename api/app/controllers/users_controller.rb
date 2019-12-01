# frozen_string_literal: true

class UsersController < ApplicationController # rubocop:todo Style/Documentation
  def show
    render json: current_user
  end
end

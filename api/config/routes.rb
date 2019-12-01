# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: { sessions: 'sessions',
                            registrations: 'registrations' },
             defaults: { format: :json }

  root to: 'blogs#index'
  get 'user', to: 'users#show'
  get 'blogs/', to: 'blogs#index'
  get 'blogs/:id', to: 'blogs#show'
  post 'blogs/', to: 'blogs#create'
  patch 'blogs/:id', to: 'blogs#update'
  delete 'blogs/:id', to: 'blogs#destroy'
end

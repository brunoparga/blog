Rails.application.routes.draw do
  devise_for :users,
             controllers: { sessions: 'my_sessions' },
             defaults: { format: :json }
  root to: 'blogs#index'
  get 'blogs/', to: 'blogs#index'
  get 'blogs/:id', to: 'blogs#show'
  post 'blogs/', to: 'blogs#create'
  patch 'blogs/:id', to: 'blogs#update'
  delete 'blogs/:id', to: 'blogs#destroy'
end

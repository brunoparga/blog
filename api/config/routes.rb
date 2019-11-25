Rails.application.routes.draw do
  get 'blogs/', to: 'blogs#index'
  get 'blogs/:id', to: 'blogs#show'
  post 'blogs/', to: 'blogs#create'
  put 'blogs/:id', to: 'blogs#update'
  delete 'blogs/:id', to: 'blogs#destroy'
end

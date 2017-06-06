Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :index]
    resources :photos, only: [:index, :create, :destroy, :show]
    resources :comments, only: [:index, :create, :destroy, :show]

  end

  root "static_pages#root"
end

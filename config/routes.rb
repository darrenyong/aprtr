Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create] do
      resources :photos, only: [:index]
    end

    resource :session, only: [:new, :create, :destroy]
    resources :photos, only: [:index, :show, :create, :update, :destroy]
  end

  resources :photos, only: [:show]

  # match "*path", to: redirect('/'), via: :all
end

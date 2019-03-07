Rails.application.routes.draw do root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :photos, only: [:index]
      resources :albums, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :photos, except: [:new, :edit]
    resources :albums, except: [:index, :new, :edit]
  end

  # match "*path", to: redirect('/'), via: :all
end

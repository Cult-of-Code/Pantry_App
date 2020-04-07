Rails.application.routes.draw do
  resources :instructions
  resources :ingredients
  resources :user_recipes
  resources :pantry_items
  devise_for :users
  get '*path', to: 'main#home', constraints: ->(request){ request.format.html? }
  root to: 'main#home'
end

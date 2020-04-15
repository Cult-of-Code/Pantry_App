Rails.application.routes.draw do
  resources :instructions
  resources :ingredients
  resources :user_recipes
  resources :pantry_items 
  devise_for :users
  
  
  
  # Custom Routes
  get '/user_packages' => 'main#user_packages_all'
  get '/user_package/:id' => 'main#user_package_one'
  
  get '/user_pantry_items/:id' => 'main#user_pantry_items'
  
  get '/user_user_recipes/:id' => 'main#user_recipes'
  
  
  get '*path', to: 'main#home', constraints: ->(request){ request.format.html? }
  root to: 'main#home'
end

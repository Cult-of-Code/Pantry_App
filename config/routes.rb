Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'main#home', constraints: ->(request){ request.format.html? }
  root to: 'main#home'
end

Rails.application.routes.draw do
  resources :users, only: [:new, :create, :index, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :subs do
    resources :posts, except: [:index]
  end
  
  # bundle exec rails g resource Users username:index password_digest session_token:index & bundle exec rails g controller Sessions new create destroy
end

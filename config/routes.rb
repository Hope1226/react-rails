Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root to: 'statics#index'
  namespace :v1, default: { format: 'json' } do
    get 'things', to: 'things#index'
  end

  # Forward all requests to StaticController#index but reuest 
  # must be non-Ajx (!req.xhr?) and HTL Mime type (req.format.html)?

  get '*page', to: 'statics#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  # Defines the root path route ("/")
  # root "articles#index"
end

class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    before_action :configure_permitted_parameters, if: :devise_controller?


    private

    def after_sign_in_path_for(resource)
       "/dashboard"
    end

    protected

         def configure_permitted_parameters
              devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password)}

              devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:name, :email, :password, :current_password)}
         end
       
end
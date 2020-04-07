class MainController < ApplicationController
    def home
        render component: 'App', prerender: false,
                props: { 
                            current_user: current_user,
                            logged_in: user_signed_in?,
                            sign_in_route: new_user_session_path,
                            sign_out_route: destroy_user_session_path
                            #ass: asset_host 
                        }
    end
end

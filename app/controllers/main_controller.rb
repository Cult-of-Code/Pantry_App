class MainController < ApplicationController
    
    def home
        render component: 'App', prerender: false,
                props: { 
                            logged_in: user_signed_in?,
                            current_user: current_user,
                            sign_in_route: new_user_session_path,
                            sign_out_route: destroy_user_session_path
                            #ass: asset_host 
                        }
    end
    
    
    # - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - --
    
    # All User Packages
    def user_packages_all
        
        everyone = User.all.select(:id, :username)  #, :picture_location
        packages = []
        
        everyone.each do |u|
            recipes = UserRecipe.where(user_id: u.id)
            packages << u.attributes.merge!({ 
                #apartments: Apartment.where(user_id: u.id).order("price ASC") 
                pantry_items: PantryItem.where(user_id: u.id),
                recipes: recipes.map{ |el|
                    el.attributes.merge!({
                        ingredients: Ingredient.where(user_recipe_id: recipes.ids),
                        instructions: Instruction.where(user_recipe_id: recipes.ids)
                    })
                }
            })
        end
        
        render json: packages
    end
    
    
    
    # One User Package
    def user_package_one
        
        person = User.where(id: params[:id]).select(:id, :username)[0]  #, :picture_location
        recipes = UserRecipe.where(user_id: person.id)
        
        render json: Hash[
            person.attributes.merge!({ 
            pantry_items: PantryItem.where(user_id: person.id),
            recipes: recipes.map{ |el|
                el.attributes.merge!({
                    ingredients: Ingredient.where(user_recipe_id: recipes.ids),
                    instructions: Instruction.where(user_recipe_id: recipes.ids)
                })}
            })
        ]
    end
    
    # - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - --
    
    
    # - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - -- - --
    
    def user_pantry_items
        
        person = User.where(id: params[:id]).select(:id, :username)[0]
        
        render json: person.attributes.merge({
            pantry_items: PantryItem.where(user_id: person.id)
        })
        
    end
    
end

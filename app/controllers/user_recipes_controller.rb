class UserRecipesController < ApplicationController
    def index
        userRecipes = UserRecipe.all
        render json: userRecipes
    end
    
    def update 
        userRecipe = UserRecipe.find(params[:id])
        userRecipe.update_attributes(userRecipe_params)
        render json: userRecipe
    end
    
    def destroy
        UserRecipe.destroy(params[:id])
    end
    
    def create 
         userRecipe = UserRecipe.create(userRecipe_params)
        if userRecipe.valid?
        render json: userRecipe
        else
        render json: userRecipe.errors, status: :unprocessable_entity
        end
    end
    
    
    def show
        userRecipe = UserRecipe.find(params[:id])
        render json: userRecipe
    end
    
    private
    
        def userRecipe_params
            params.require(:userRecipe).permit(:name, :description, :est_time, :user_id)
        end

    
end

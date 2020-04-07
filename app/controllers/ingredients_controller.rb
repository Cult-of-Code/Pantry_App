class IngredientsController < ApplicationController
    def index
        ingredients = Ingredient.all
        render json: ingredients
    end
    
    def update 
        ingredient = Ingredient.find(params[:id])
        ingredient.update_attributes(ingredient_params)
        render json: ingredient
    end
    
    def destroy
        Ingredient.destroy(params[:id])
    end
    
    def create
         ingredient = Ingredient.create(ingredient_params)
        if ingredient.valid?
        render json: ingredient
        else
        render json: ingredient.errors, status: :unprocessable_entity
        end
    end
    
    
    def show
        ingredient = Ingredient.find(params[:id])
        render json: ingredient
    end
    
    private
    
        def ingredient_params
            params.require(:ingredient).permit(:name, :amount, :unit)
        end

    
end

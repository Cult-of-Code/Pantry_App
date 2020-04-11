class PantryItemsController < ApplicationController
    def index
        pantryItems = PantryItem.all
        render json: pantryItems
    end
    
    def update 
        pantryItem = PantryItem.find(params[:id])
        pantryItem.update_attributes(pantryItem_params)
        render json: pantryItem
    end
    
    def destroy
        PantryItem.destroy(params[:id])
    end
    
    def create
         pantryItem = PantryItem.create(pantryItem_params)
        if pantryItem.valid?
        render json: pantryItem
        else
        render json: pantryItem.errors, status: :unprocessable_entity
        end
    end
    
    
    def show
        pantryItem = PantryItem.find(params[:id])
        render json: pantryItem
    end
    
    private
    
        def pantryItem_params
            params.require(:pantryItem).permit(:user_id, :name, :quantity, :units, :storage_bin, :when_bought, :exp_date, :min_item, :max_item)
        end

    
end

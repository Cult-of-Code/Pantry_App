class AddUserRecipeIdToIngredients < ActiveRecord::Migration[6.0]
  def change
    add_column :ingredients, :user_recipe_id, :integer
  end
end

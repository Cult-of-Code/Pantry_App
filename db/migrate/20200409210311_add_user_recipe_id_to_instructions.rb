class AddUserRecipeIdToInstructions < ActiveRecord::Migration[6.0]
  def change
    add_column :instructions, :user_recipe_id, :integer
  end
end

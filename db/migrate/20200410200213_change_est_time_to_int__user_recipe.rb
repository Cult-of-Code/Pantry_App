class ChangeEstTimeToIntUserRecipe < ActiveRecord::Migration[6.0]
  def change
    
    remove_column :user_recipes, :est_time, :datetime
    add_column :user_recipes, :est_time, :integer
    
  end
end

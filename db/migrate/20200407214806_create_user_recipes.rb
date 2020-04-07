class CreateUserRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :user_recipes do |t|
      t.string :name
      t.string :description
      t.datetime :est_time

      t.timestamps
    end
  end
end

class UserRecipe < ApplicationRecord
    belongs_to :user
    has_many :ingredients
    has_many :instructions
end

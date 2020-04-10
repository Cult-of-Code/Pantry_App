class Instruction < ApplicationRecord
    belongs_to :user_recipes
    validates :step, presence: true
end

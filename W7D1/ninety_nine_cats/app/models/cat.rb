require 'date'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    COLORS = ['white','black','purple','gray','orange']

    validates :color, :birth_date, :name, :sex, presence: true
    validates :color, inclusion: { in: COLORS,
    message: "%{value} is not a valid color" }
    validates :sex, inclusion: {in: %w(F M), message: "%{value} must be F or M"}

    def age
        time_ago_in_words(birth_date)
    end
    
    
    
end


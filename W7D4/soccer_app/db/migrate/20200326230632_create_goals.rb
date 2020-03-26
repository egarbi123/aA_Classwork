class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :title, null: false
      t.text :body
      t.integer :user_id, null: false
      t.boolean :complete, default: false
      t.date :complete_by
      t.timestamps
    end

    add_index :goals, :title
    add_index :goals, :user_id

  end
end

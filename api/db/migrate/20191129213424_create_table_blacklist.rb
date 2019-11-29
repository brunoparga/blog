class CreateTableBlacklist < ActiveRecord::Migration[6.0]
  def change
    create_table :blacklist do |t|
      t.string :jti, null: false
      t.datetime :exp, null: false
    end
    add_index :blacklist, :jti
  end
end
